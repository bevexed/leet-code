{
  const arr = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ];

  // Definition for a Node.
  class Node {
    private val: any;
    private neighbors: any;
    constructor(val: any, neighbors?: any) {
      this.val = val === undefined ? 0 : val;
      this.neighbors = neighbors === undefined ? [] : neighbors;
    }
  }
  const clone = (node: any, map: any) => {
    if (!node) return null;
    let newNode = map.get(node);
    if (newNode) {
      return newNode;
    }
    newNode = new Node(node.val);
    map.set(node, newNode);
    console.log(node);
    node.neighbors.forEach((neighbor: any) => {
      newNode.neighbors.push(clone(neighbor, map));
    });
    return newNode;
  };

  const cloneGraph = function (node: any): any {
    node = node.map((item: any, key: number) => ({
      val: key,
      neighbors: item,
    }));
    console.log(node);
    return clone(node, new Map());
  };
  console.log(cloneGraph(arr));
}
