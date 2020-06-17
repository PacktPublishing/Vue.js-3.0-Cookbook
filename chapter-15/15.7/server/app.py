import sqlite3 as sql
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

parser = reqparse.RequestParser()

conn = sql.connect('tasks.db')
conn.execute('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)')
conn.close()

class ToDo(Resource):
    def get(self):
        con = sql.connect('tasks.db')
        cur = con.cursor()
        cur.execute('SELECT * from tasks')
        tasks = cur.fetchall()
        con.close()

        return {
            'tasks': tasks
        }

    def post(self):
        parser.add_argument('task', type=str)
        args = parser.parse_args()
        
        con = sql.connect('tasks.db')
        cur = con.cursor()
        cur.execute('INSERT INTO tasks(task) values ("{}")'.format(args['task']))
        con.commit()
        con.close()

        return {
            'status': True,
            'task': '{} added.'.format(args['task'])
        }

    def put(self, id):
        parser.add_argument('task', type=str)
        args = parser.parse_args()

        con = sql.connect('tasks.db')
        cur = con.cursor()
        cur.execute('UPDATE tasks set task = "{}" WHERE id = {}'.format(args['task'], id))
        con.commit()
        con.close()

        return {
            'id': id,
            'status': True,
            'task': 'The task {} was updated.'.format(id)
        }

    def delete(self, id):
        con = sql.connect('tasks.db')
        cur = con.cursor()
        cur.execute('DELETE FROM tasks WHERE id = {}'.format(id))
        con.commit()
        con.close()

        return {
            'id': id,
            'status': True,
            'task': 'The task {} was deleted.'.format(id)
        }


api.add_resource(ToDo, '/', '/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)
