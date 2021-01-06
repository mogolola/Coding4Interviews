class TreeLinkNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
        self.next = None

class Solution:
	def GetNext(self, pNode):
		if not pNode:
			return None
		if pNode.right:
			node = pNode.right
			while node.left:
				node = node.left
			return node
		while pNode.next and pNode.next.right == pNode:
			pNode = pNode.next
		return pNode.next
