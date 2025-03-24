

NESTED_GRAPH_ID = "NestedGraph"

class NestedGraph:
    def __init__(self, task, value):
        self.task = task
        self.value = value
    
    def get_nested_graph_start_node_id(self):
        return str(self.value)
    
    @classmethod
    def get_nested_graph_component_node(self, params):
        path = params["path"]
        cur_node_i = len(path) - 1
        prev_node_id = None
        while cur_node_i >= 0:
            if "nested_graph_jump" in path[cur_node_i]:
                cur_node_i = path[cur_node_i]["nested_graph_jump"]
            cur_node = path[cur_node_i]
            cur_node_id = cur_node["node_id"]
            to_node_id = cur_node.get("to_node_id", None)
            if to_node_id is not None and to_node_id == prev_node_id:
                return cur_node_id, params
            
            prev_node_id = cur_node_id
            cur_node_i -= 1
        
        return None, params
    
    @classmethod
    def set_last_node_jump_if_leaf(self, params):
        if not params["path"][-1]["is_leaf"]:
            return params
        path = params["path"]
        cur_node_i = len(path) - 1
        prev_node_id = None
        while cur_node_i >= 0:
            if "nested_graph_jump" in path[cur_node_i]:
                cur_node_i = path[cur_node_i]["nested_graph_jump"]
            cur_node = path[cur_node_i]
            cur_node_id = cur_node["node_id"]
            to_node_id = cur_node.get("to_node_id", None)
            if to_node_id is not None and to_node_id == prev_node_id:
                params["path"][-1]["nested_graph_jump"] = cur_node_i
                return params
            
            prev_node_id = cur_node_id
            cur_node_i -= 1
        return params
        

