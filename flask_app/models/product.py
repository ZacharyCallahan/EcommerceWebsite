from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Product:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.image = data['image']
        self.quantity = data['quantity']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM products;"
        results = connectToMySQL('flask_ecommerce_website_schema').query_db(query)
        products = []
        for product in results:
            products.append(cls(product))
        return products
    