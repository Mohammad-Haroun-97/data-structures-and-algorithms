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

 




}


module.exports=BinaryTree
   



