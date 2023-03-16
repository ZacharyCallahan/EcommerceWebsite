from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class OrderItem:
    db = 'flask_ecommerce_website_schema'
    def __init__(self, data):
        self.id = data['id']
        self.order_id = data['order_id']
        self.quantity = data['quantity']
        self.price = data['price']

    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO order_items (order_id, product_id, price) VALUES (%(order_id)s, %(product_id)s, %(price)s);"
        return connectToMySQL(cls.db).query_db(query, data)

    
    @classmethod
    def update(cls, data):
        query = "UPDATE order_items SET quantity = %(quantity)s + quantity, price = %(price)s * quantity WHERE product_id = %(product_id)s;"
        return connectToMySQL(cls.db).query_db(query, data)
    
    @classmethod
    def update_order_item_total_price(cls, data):
        # price should be set to the price of the product * quantity
        query = "UPDATE order_items SET price = (SELECT price FROM products WHERE id = %(product_id)s) * quantity WHERE product_id = %(product_id)s;"
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def get_total_quantity_by_order_id(cls, data):
        query = 'SELECT quantity FROM order_items WHERE order_id = %(order_id)s'
        result = connectToMySQL(cls.db).query_db(query, data)
        total = 0
        for row in result:
            total += row['quantity']
        return total
        
    
    @staticmethod
    def item_is_in_cart(data):
        query = "SELECT * FROM order_items WHERE order_id = %(order_id)s AND product_id = %(product_id)s;"
        results = connectToMySQL(OrderItem.db).query_db(query, data)
        return len(results) > 0
    
    @classmethod
    def remove_item_from_cart(cls, data):
        # if the items quantity is 1, delete the item from the order_items table
        # else just decrement the quantity by 1 then remove the price of the product from price of the order item in the order_items table and update the total price of the order
        query = "SELECT quantity FROM order_items WHERE order_id = %(order_id)s AND product_id = %(product_id)s;"
        result = connectToMySQL(cls.db).query_db(query, data)
        if result[0]['quantity'] == 1:
            query = "DELETE FROM order_items WHERE order_id = %(order_id)s AND product_id = %(product_id)s;"
            return connectToMySQL(cls.db).query_db(query, data)
        else:
            query = "UPDATE order_items SET quantity = quantity - 1, price = price - (SELECT price FROM products WHERE id = %(product_id)s) WHERE order_id = %(order_id)s AND product_id = %(product_id)s;"
            return connectToMySQL(cls.db).query_db(query, data)
        
        
 
    