class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
	def deleteDuplication(self, pHead):
		if not pHead:	return None
		mock = ListNode(None)
		mock.next = pHead
		prev = mock
		cur = pHead
		next = cur.next
		while next:
			if cur.val == next.val:
				while next and cur.val == next.val:
					tmp = next
					next = next.next
					del tmp
				del cur
				if next:
					prev.next = next
					cur = next
					next = next.next
				else:
					prev.next = None
			else:
				prev = prev.next
				cur = cur.next
				next = next.next
		pHead = mock.next
		del mock
		return pHead
				
p1 = ListNode(1)
p2 = ListNode(1)
p3 = ListNode(1)
p4 = ListNode(1)
p5 = ListNode(1)
p6 = ListNode(1)
p7 = ListNode(1)
p1.next, p2.next, p3.next, p4.next, p5.next, p6.next = p2,p3,p4,p5,p6,p7

solution = Solution()
solution.deleteDuplication(p1)

