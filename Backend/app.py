from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shopping_list.db'
db = SQLAlchemy(app)

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

@app.route('/items', methods=['GET', 'POST'])
def handle_items():
    if request.method == 'GET':
        items = Item.query.all()
        items_list = [{'id': item.id, 'name': item.name} for item in items]
        return jsonify(items_list)
    elif request.method == 'POST':
        data = request.json
        new_item = Item(name=data['name'])
        db.session.add(new_item)
        db.session.commit()
        return jsonify({'id': new_item.id, 'name': new_item.name}), 201

@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = Item.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item deleted successfully'})

if __name__ == '__main__':
    db.create_all()
    # Pre-populate the database with initial items
    if not Item.query.first():
        initial_items = ['Milk', 'Eggs', 'Bread']
        for item_name in initial_items:
            db.session.add(Item(name=item_name))
        db.session.commit()
    app.run(host='0.0.0.0', debug=True)
