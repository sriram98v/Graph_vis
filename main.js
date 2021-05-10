
document.getElementById('graphInput').addEventListener('change', readGraph, false);


function readGraph() {
    const file = this.files[0];
    let reader = new FileReader()
    reader.readAsText(file);
    console.log(file.name);

    reader.onload = function() {
        var container = document.getElementById('graph');
        let graphJSON = reader.result;
        var array = JSON.parse(graphJSON);
        data = {nodes: array[0], edges: array[1]};
        var options = {
            "configure": {
                "enabled": true,
                "filter": [
                    "nodes",
                    "edges",
                    "physics"
                ]
            },
            "edges": {
                "color": {
                    "inherit": true
                },
                "smooth": {
                    "enabled": false,
                    "type": "continuous"
                }
            },
            "interaction": {
                "dragNodes": true,
                "hideEdgesOnDrag": false,
                "hideNodesOnDrag": false
            },
            "physics": {
                "enabled": true,
                "stabilization": {
                    "enabled": true,
                    "fit": true,
                    "iterations": 1000,
                    "onlyDynamicEdges": false,
                    "updateInterval": 50
                }
            }
        };
        options.configure["container"] = document.getElementById("config");
        network = new vis.Network(container, data, options);
        console.log(data.nodes[0])
      };
}