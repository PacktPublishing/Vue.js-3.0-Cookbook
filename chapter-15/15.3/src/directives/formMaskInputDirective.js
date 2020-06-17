import tokens from './tokens';

function maskerValue(v, m, tkn) {
  const value = v || '';

  const mask = m || '';

  let maskIndex = 0;

  let valueIndex = 0;

  let output = '';

  while (maskIndex < mask.length && valueIndex < value.length) {
    let maskCharacter = mask[maskIndex];
    const masker = tkn[maskCharacter];
    const valueCharacter = value[valueIndex];

    if (masker && !masker.escape) {
      if (masker.pattern.test(valueCharacter)) {
        output += masker.transform ? masker.transform(valueCharacter) : valueCharacter;
        maskIndex += 1;
      }

      valueIndex += 1;
    } else {
      if (masker && masker.escape) {
        maskIndex += 1;
        maskCharacter = mask[maskIndex];
      }

      output += maskCharacter;

      if (valueCharacter === maskCharacter) valueIndex += 1;

      maskIndex += 1;
    }
  }

  let outputRest = '';
  while (maskIndex < mask.length) {
    const maskCharacter = mask[maskIndex];

    if (tkn[maskCharacter]) {
      outputRest = '';
      break;
    }

    outputRest += maskCharacter;

    maskIndex += 1;
  }

  return output + outputRest;
}

function eventDispatcher(name) {
  const evt = document.createEvent('Event');

  evt.initEvent(name, true, true);

  return evt;
}

function maskDirective(el, binding) {
  let config = binding.value;

  if (!config) return false;

  if (typeof config === 'string') {
    config = {
      mask: config,
      tokens,
    };
  } else {
    throw new Error('Invalid input entered');
  }

  let element = el;

  if (element.tagName.toLocaleUpperCase() !== 'INPUT') {
    const els = element.getElementsByTagName('input');

    if (els.length !== 1) {
      throw new Error(`v-input-mask directive requires 1 input, found ${els.length}`);
    } else {
      [element] = els;
    }
  }

  element.oninput = (evt) => {
    if (!evt.isTrusted) return;
    let position = element.selectionEnd;

    const digit = element.value[position - 1];
    element.value = maskerValue(element.value, config.mask, config.tokens);
    while (
      position < element.value.length
      && element.value.charAt(position - 1) !== digit
    ) {
      position += 1;
    }
    if (element === document.activeElement) {
      element.setSelectionRange(position, position);
      setTimeout(() => {
        element.setSelectionRange(position, position);
      }, 0);
    }
    element.dispatchEvent(eventDispatcher('input'));
  };

  const newDisplay = maskerValue(element.value, config.mask, config.tokens);
  if (newDisplay !== element.value) {
    element.value = newDisplay;
    element.dispatchEvent(eventDispatcher('input'));
  }

  return true;
}

export default maskDirective;
