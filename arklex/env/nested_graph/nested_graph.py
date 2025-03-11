

NESTED_GRAPH_ID = "NestedGraph"
NESTED_GRAPH_NAME = "NestedGraph"

class NestedGraph:
    def __init__(self, task, value):
        self.task = task
        self.value = value
    
    def get_nested_graph_start_node_id(self):
        return self.value
    
    @classmethod
    def get_nested_graph_component_node(self, path):
        pass

