from flask_app.config.mysqlconnection import connectToMySQL


class Order:
    db = 'flask_ecommerce_website_schema'

    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.total_price = data['total_price']
        self.status = data['status']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
        INSERT INTO orders (user_id, status) 
        VALUES (%(user_id)s, %(status)s);"""
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = """
        UPDATE orders SET 
        user_id = %(user_id)s, 
        total_price = %(total_price)s 
        WHERE id = %(id)s;"""
        return connectToMySQL(cls.db).query_db(query, data)
    
    @classmethod
    def update_status(cls, data):
        query = """
        UPDATE orders SET 
        status = %(status)s 
        WHERE id = %(id)s;"""
        return connectToMySQL(cls.db).query_db(query, data)
        
    @classmethod
    def get_all_user_orders(cls, data):
        query = "SELECT * FROM orders WHERE user_id = %(user_id)s;"
        results = connectToMySQL(cls.db).query_db(query, data)
        orders = []
        for order in results:
            orders.append(cls(order))
        return orders
    
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM orders WHERE id = %(id)s;"
        results = connectToMySQL(cls.db).query_db(query, data)
        return cls(results[0])

    @classmethod
    def get_all_order_data_by_id(cls, data):
        # get all order item, and product data for a given order id
        query = """
        SELECT order_items.id, order_items.order_id, order_items.product_id, order_items.quantity, order_items.price, products.title, products.description, products.image, products.price FROM order_items
        JOIN products ON order_items.product_id = products.id
        WHERE order_items.order_id = %(order_id)s;"""
        results = connectToMySQL(cls.db).query_db(query, data)
        return results

    @classmethod
    def get_total_price_by_order_id(cls, data):
        query = "SELECT total_price FROM orders WHERE id = %(order_id)s;"
        result = connectToMySQL(cls.db).query_db(query, data)
        return result[0]['total_price']

    @classmethod
    def update_order_total_price(cls, data):
        # get the total price of all the order items in an order than update it in the orders table
        query = """
        UPDATE orders SET total_price = (SELECT SUM(price) FROM order_items WHERE order_id = %(order_id)s) WHERE id = %(order_id)s;"""
        return connectToMySQL(cls.db).query_db(query, data)
