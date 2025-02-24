

RESOURCE_ID = "fa0495bf-133c-4915-b86e-dbdcb34e2f46"
RESOURCE_NAME = "NestedGraph"

class NestedGraph:
    def __init__(self, task, value):
        self.task = task
        self.value = value
    
    def get_nested_graph_start(self):
        return self.value
    
    @classmethod
    def get_nested_graph_component_node(self, path):
        pass