'use strict'
const BinaryTree=require('./BinaryTree')
const Node=require('./Node')

class BinarySearchTree extends BinaryTree{

    constructor(value){
        super(value)

    }


    adding(value){
        const newNode=new Node(value)

        if (this.root===null) {
            
            this.root=newNode
            return this.root
        }

            function recursionAdding(node) {
                
                if (value < node.value) {
                    if (node.left) {               //     هل ما زالت موجودة ال node.left ?

                        recursionAdding(node.left)
                    }else{
                        node.left=newNode

                    }

                } else {
                        if (node.right) {

                            recursionAdding(node.right)
                        }else{
                            node.right=newNode
                        }
                        
                    }


                
                
                
            }
            recursionAdding(this.root)

           


    }


    contain(value){
   
    function recursionCoontain(node) {
        if (node.value===value) { return true}

        if  (value <node.value) {
            if (node.left) {
                recursionCoontain(node.left)
                
            }

            
        }
        if (value >node.value) {
            if (node.right) {
                recursionCoontain(node.right)
                
            }

            
        }

        else{
            return false
        }

    }

    return recursionCoontain(this.root)

}
}

module.exports= BinarySearchTree
  
