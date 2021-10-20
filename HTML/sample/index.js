list2 = [
    ['lvl-1 item-1', 'lvl-2 item-1'],
    ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-1'],
    ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-2'],
    ['lvl-1 item-2', 'lvl-2 item-1', 'lvl-3 item-1'],
    ['lvl-1 item-2', 'lvl-2 item-2', 'lvl-3 item-2', 'lvl-4 item-1']
  ]

list = [
    {id:1,title:'a',parentId:null},
]  
  
function createTree(structure) {
    const node = (id,title, parent = null) => ({id,title, parent, children: []});
    const addNode = (parent, child) => (parent.children.push(child), child);
    const findNamedNode = (name, parent) => {
        for (const child of parent.children) {
            if (child.id === name) { return child }
            const found = findNamedNode(name, child);
            if (found) { return found }            
        }
    }
    const top = node(structure[0]);
    var current;
//debugger;
    for (const children of structure) {
        current = top;
        
        //for (const name in children) {
            console.log(children);    
            const found = findNamedNode(children.id, current);
            current = found ? found : addNode(current, node(name, current.name));
        //}
    }
    return top;
}
  
//  console.log(createTree(list, 'lvl-0 item-1'))
  console.log(createTree(list))
