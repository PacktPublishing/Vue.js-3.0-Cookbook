import { Storage } from 'aws-amplify';
import { uid } from 'quasar';
import AwsExports from '../aws-exports';

Storage.configure({
  AWSS3: {
    bucket: AwsConfig.aws_user_files_s3_bucket,
    region: AwsConfig.aws_user_files_s3_bucket_region,
  },
});

export async function uploadFile(file, name = uid(), type = 'image/png') {
  try {
    const uploadedFile = await Storage.put(name, file, {
      contentType: type,
      accept: '*/*',
    });

    return {
      ...uploadedFile,
      bucket: AwsConfig.aws_user_files_s3_bucket,
      region: AwsConfig.aws_user_files_s3_bucket_region,
    };
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function getFile(name = '') {
  try {
    return await Storage.get(name, { level: 'public' });
  } catch (err) {
    return Promise.reject(err);
  }
}

export default {
  uploadFile,
  getFile,
};
