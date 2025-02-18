from arklex.env.tools.shopify.utils_slots import ShopifySlots
from arklex.env.tools.shopify.utils_cart import *
from arklex.env.tools.shopify.utils_nav import *

from arklex.env.tools.shopify.get_cart import get_cart
from arklex.env.tools.shopify.cart_remove_items import cart_remove_items

from arklex.env.tools.tools import register_tool, untool

description = "Clear all items from cart."
slots = [
    ShopifySlots.CART_ID,
    *PAGEINFO_SLOTS
]
outputs = []
CART_NOT_FOUND_ERROR = "error: cart not found"
errors = [CART_NOT_FOUND_ERROR]

@register_tool(description, slots, outputs, lambda x: x not in errors)
def cart_clear(cart_id, **kwargs):
    lines = nav_get_all(untool(get_cart), cart_id, ['lines', 'nodes'], **kwargs)
    line_ids = [line['id'] for line in lines]
    
    untool(cart_remove_items)(cart_id, line_ids)
    
    return None