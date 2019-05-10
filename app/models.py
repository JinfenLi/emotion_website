from . import db

# define the database models in this file
class Info(db.Model):


    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(120), unique=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return '<id %r>' % self.id

class Text(db.Model):


    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, unique=False)
    text = db.Column(db.String(255), unique=False)

    def __init__(self, userId, text):
        self.userId = userId
        self.text = text

    def __repr__(self):
        return '<id %r>' % self.id
