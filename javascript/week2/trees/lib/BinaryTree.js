'use strict'


class BinaryTree{
  constructor(){
    this.root=null
  }
  preOrder(){

    let output=[];

    function traverse(node) {
      
      output.push(node.value)

      if (node.left) traverse(node.left)  
      if (node.right) traverse(node.right)  

    }

    traverse(this.root);

    return output


  }


  inOrder(){

    let output=[];

    function traverse(node) {

      if (node.left) traverse(node.left);
      output.push(node.value)

      if(node.right) traverse(node.right)
      
    }

    traverse(this.root)
    return output
  }

  postOrder(){

    let output=[];
    function traverse(node) {

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      output.push(node.value)
      
    }
    traverse(this.root)
    return output
  }

  breadthFirstSearch(tree) {
    if (!this.root) {
      return "empty";
    }
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      console.log(value);
      result.push(value);
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }

      if (item.right != null) {
        queue.push(item.right);
      }
    }
    return result;
  }
}


 






module.exports=BinaryTree
   



