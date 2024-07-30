// ToDO: REVISE!!
// Activity 1
// Task 1
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
};
const node1=new Node(10);
const node2=new Node(10,node1);

// Task 2
class LinkedList{
    constructor(){
        this.head=null;
    }
    addNode(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
        }
        else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
    }
    removeNode(){
        if(!this.head) return null;
        let current=this.head;
        let previous=null;
        while(current.next){
            previous=current;
            current=current.next;
        }
            previous.next=null;
    }
    displayNodes(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}
const linkedList=new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.displayNodes();
linkedList.removeNode();
linkedList.displayNodes();


// Activity 2
// Task 3
class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length===0){
            return `Stack is Empty`;
        }
        return this.items.pop();
    }
    peek(){
        if(this.items.length===0){
            return `Stack is Empty`;
        }
        return this.items[this.items.length-1];
    }
    display(){
        let str='';
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+' ';
        }
        return str;
    }
}
const stack=new Stack();
stack.push(1);
stack.push(2);
console.log(stack.display());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.display());

// Task 4
const reverseStr=(str)=>{
    const stack=new Stack;
    let reversedStr='';
    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }
    while(stack.items.length>0){
        reversedStr+=stack.pop();
    }
    return reversedStr;
}
console.log(reverseStr("true"));
console.log(reverseStr("javascript"));


// Activity 3
// Task 5
class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.items.length===0){
            return `Queue is Empty`;
        }
        return this.items.shift();
    }
    front(){
        if(this.items.length===0){
            return `Queue is Empty`;
        }
        return this.items[0];
    }
    display(){
        let str='';
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+' ';
        }
        return str;
    }
}
const queue=new Queue();
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.display());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.display());

// Task 6
const printJob=(jobs)=>{
    const queue=new Queue;
    for(let i=0;i<jobs.length;i++){
        queue.enqueue(jobs[i]);
    }
    while(queue.items.length>0){
        console.log(queue.dequeue());
    }
}
const jobs=[
    'A',
    'B',
    'C',
    'D'
]
printJob(jobs);


// Activity 4
// Task 7
class TreeNode{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
const leftNode=new TreeNode(1);
const rightNode=new TreeNode(3);
const root=new TreeNode(2,leftNode,rightNode);
console.log("Root:",root.data);
console.log("Left:",root.left.data);
console.log("Right",root.right.data);

// Task 8
class Binarytree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode=new TreeNode(data);
        if(this.root===null){
            this.root=newNode;
        }
        else{
            this._insertNode(this.root,newNode);
        }
    }
    _insertNode(node,newNode){
        if(newNode.data<node.data){
            if(node.left===null){
                node.left=newNode;
            }
            else{
                this._insertNode(node.left,newNode);
            }
            }  else{
                if(node.right===null){
                    node.right=newNode;
                }
                else{
                    this._insertNode(node.right,newNode);
                }
            }
        }
        inOrderTraversal(node=this.root){
            if(node!==null){
                this.inOrderTraversal(node.left);
                console.log(node.data);
                this.inOrderTraversal(node.right);
            }
        }
    };

const tree=new Binarytree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
console.log("In Order Traversal of the binary tree:");
tree.inOrderTraversal();


// Activity 5
// Task 9
class Graph{
    constructor(){
        this.adjacencyList=new Map();
    }
    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[]);
        }
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList.has(vertex1)&&this.adjacencyList.has(vertex2)){
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }
    bfs(start){
        const queue=[start];
        const visited=new Set();
        const result=[];
        visited.add(start);

        while(queue.length){
            const vertex=queue.shift();
            result.push(vertex);

            this.adjacencyList.get(vertex).forEach(neighbor=>{
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    // Task 10
    shortestPath(start,end){
        const queue=[[start]];
        const visited=new Set();

        while(queue.length){
            const path=queue.shift();
            const vertex=path[path.length-1];

            if(vertex===end){
                return path;
            }
            if(!visited.has(vertex)){
                visited.add(vertex);
                this.adjacencyList.get(vertex).forEach(neighbor=>{
                    if(!visited.has(neighbor)){
                        const newPath=[...path,neighbor];
                        queue.push(newPath);
                    }
                });
            }
        }
        return null;
    }
};

const graph=new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A','B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(`BFS starting from A:`,graph.bfs('A'));
console.log(`Shortest path between A and E:`,graph.shortestPath('A','E'));




