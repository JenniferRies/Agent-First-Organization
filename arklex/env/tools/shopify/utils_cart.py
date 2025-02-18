import os
from urllib.parse import unquote

from arklex.env.tools.shopify.utils import *

from dotenv import load_dotenv
load_dotenv()

cart_url = "https://xu1e3z-yi.myshopify.com/api/2024-04/graphql.json"
cart_headers = {
    "X-Shopify-Storefront-Access-Token": os.environ.get('SHOPIFY_STOREFRONT_ACCESS_TOKEN')
}

def get_cart_id_from_cookie(cookie):
    return f'gid://shopify/Cart/{unquote(cookie)}'

def create_cart():
    query = '''
            mutation cartCreate($input: CartInput) {
                cartCreate(input: $input) {
                    cart {
                        # attributes {
                        #   key
                        #   value
                        # }
                        id
                        lines (first: 10) {
                            nodes {
                                id
                                quantity
                            }
                        }
                        checkoutUrl
                    }
                }
            }
            '''
    variable = {
        "input": {
        # "attributes": [
        #   {
        #     "key": "test",
        #     "value": "test"
        #   }
        # ]
        }
    }

    cart_dict = make_query(cart_url, query, variable, cart_headers)
    return cart_dict['data']['cartCreate']['cart']['id']