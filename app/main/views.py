import os
import csv
import json
from . import main
from .. import db
from ..models import Info
from flask import current_app as app
from flask import request, session, g, redirect, url_for, abort, \
                render_template, flash, send_from_directory

@main.route('/')
def index():

    return render_template('index.html')



@main.route('/register', methods=['POST'])
def register():
    data = json.loads(request.values.get('data'))
    print(data)
    name = data['name']
    password = data['password']
    user = Info(name, password)
    db.session.add(user)
    db.session.commit()

    return 'success'

@main.route('/login', methods=['POST','GET'])
def login():

    data = json.loads(request.values.get('data'))
    name = data['name']
    password = data['password']
    user = Info.query.filter_by(username=name, password=password).first()
    print(user)
    if user ==None:
        flash('Wrong username/password')
        return "fail"
    else:
        flash('successful')
        # return redirect(url_for('main.index'))
        return "success"


@main.route('/login_html',methods=['POST','GET'])
def login_html():
    return render_template('login.html')