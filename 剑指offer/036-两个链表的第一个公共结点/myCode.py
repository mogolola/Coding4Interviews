class ListNode:
	def __init__(self,x):
		self.val = x
		self.next = None

class Solution:
	def getLength(self, pHead):
		l = 1
		_pHead = pHead.next
		while _pHead:
			_pHead = _pHead.next
			l+=1
		return l
	
	def FindFirstCommonNode(self, pHead1, pHead2):
		if (not pHead1) or (not pHead2):
			return None
		len1 = self.getLength(pHead1)
		len2 = self.getLength(pHead2)
		if len1>len2:
			for i in range(len1 - len2):
				pHead1 = pHead1.next
		else:
			for i in range(len2 - len1):
				pHead2 = pHead2.next
		while pHead1:
			if pHead1 == pHead2:
				return pHead1
			pHead1 = pHead1.next
			pHead2 = pHead2.next
		return None
		
n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)
n5 = ListNode(5)
n6 = ListNode(6)

n1.next = n4
n4.next = n5
n5.next = n6
n2.next = n3
n3.next = n4
solution = Solution()
print(solution.FindFirstCommonNode(n1,None))

