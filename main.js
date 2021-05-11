document.getElementById('uploadFile').addEventListener('change', readGraph, false);

const info = document.getElementById("info");


function readGraph() {
    const file = this.files[0];
    let reader = new FileReader()
    reader.readAsText(file);
    console.log(file.name);

    reader.onload = function() {
        var container = document.getElementById('graph');
        let graphJSON = reader.result;
        var array = JSON.parse(graphJSON);
        var nodes = new vis.DataSet(array.nodes);
        var edges = new vis.DataSet(array.edges);
        data = {nodes: nodes, edges: edges};
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
				document.getElementById("placeholder").style.display = "none"
				document.getElementById("main").style.display = ""
        options.configure["container"] = document.getElementById("config");
        network = new vis.Network(container, data, options);
        network.on( 'click', function(properties) {
            var ids = properties.nodes;
            var clickedNodes = nodes.get(ids);
            if(clickedNodes[0]){
                info.textContent = clickedNodes[0].label;
            }
        });

      };
}
				
let optionsToggle = document.getElementById("toggleMenu")
let hamburger = document.querySelector(".hamburger")
let optionsMenu = document.getElementById("options")
let overlay = document.getElementById("overlay")
optionsToggle.addEventListener("click", toggleMenu, true)
function toggleMenu(e) {
    e.stopPropagation()
    hamburger.classList.toggle("toggle")
    optionsToggle.classList.toggle("toggle")
    options.classList.toggle("toggle")
    overlay.classList.toggle("toggle")
}

