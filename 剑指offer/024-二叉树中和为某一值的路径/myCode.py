from leetcode_tester import Tester

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
	def FindPath(self, root, expectNumber):
		if not root:	return []
		queue = [root]
		root.sum = root.val
		root.pa = None
		paths = []
		while queue:
			node = queue.pop(0)
			if node.right:
				node.right.sum = node.sum + node.right.val
				node.right.pa = node
				queue.append(node.right)
			if node.left:
				node.left.sum = node.sum + node.left.val
				node.left.pa = node
				queue.append(node.left)
			if not node.left and not node.right:
				if node.sum == expectNumber:
					path = [node.val]
					while node.pa:
						node = node.pa
						path.insert(0,node.val)
					paths.insert(0,path)
		return paths

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.right.left = TreeNode(3)


solution = Solution()
tester = Tester(solution.FindPath)
tester.addTest(root, 7, [[1,2,4],[1,3,3]])
tester.doTest()
