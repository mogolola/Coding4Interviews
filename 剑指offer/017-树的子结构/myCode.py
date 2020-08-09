# coding:utf-8

from leetcode_tester import Tester

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def HasSubtree(self,pRoot1,pRoot2):
    	if not pRoot1 or not pRoot2:	return False 
    	stack = [pRoot1]
    	r = False
    	while(len(stack)):
    		node = stack.pop()
    		if(node.left):
    			stack.append(node.left)
    		if(node.right):
    			stack.append(node.right)
    		if(self.isEqual(node, pRoot2)):
    			r=True;
    			break;
    	return r;
    	
    def isEqual(self, root1, root2):
    	if not root2:
    		return True
    	elif not root1:
    		return False
    	elif root1.val != root2.val:
    		return False;
    	else:
    		return self.isEqual(root1.left, root2.left) and self.isEqual(root1.right, root2.right) 

pRoot1 = TreeNode(1)
pRoot1.left = TreeNode(2)
pRoot1.left.left = TreeNode(4)
pRoot1.left.right = TreeNode(5)
pRoot1.right = TreeNode(3)
pRoot2 = TreeNode(2)
pRoot2.left = TreeNode(4)
pRoot2.right = TreeNode(5)
pRoot1.right.left = TreeNode(4)


solution = Solution()
tester = Tester(solution.HasSubtree)
tester.addTest(pRoot1,pRoot2,True)
tester.doTest()
