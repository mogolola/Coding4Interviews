class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
	def layerIsSymmetrical(self, layer):
		i,j = 0, len(layer)-1
		while i<=j:
			if layer[i] == None or layer[j]==None:
				if not (layer[i] == None and layer[j]==None):
					return False
			elif layer[i].val != layer[j].val:
				return False
			i+=1
			j-=1
		return True
	
	def	isSymmetrical(self, pRoot):
		if not pRoot:
			return True
		cur = [pRoot]
		next = []
		while len(cur)>0:
			for i in range(len(cur)):
				node = cur[i]
				next.append(node.left)
				next.append(node.right)
			if not self.layerIsSymmetrical(next):
				return False
			cur = list(filter(lambda x:x!=None ,next))
			next = []
		return True

from leetcode_tester import Tester

solution = Solution()
tester = Tester(solution.isSymmetrical)
n1 = TreeNode(1)
n2 = TreeNode(2)
n3 = TreeNode(2)
n4 = TreeNode(3)
n5 = TreeNode(3)

n1.left = n2
n1.right = n3
n2.left = n4
n3.right = n5
tester.addTest(n1, True)
tester.doTest()
		
