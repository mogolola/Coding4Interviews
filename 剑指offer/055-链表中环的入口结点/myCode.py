class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
        

class Solution:
	def EntryNodeOfLoop(self,pHead):
		fast, slow = pHead, pHead
		while fast.next and fast.next.next:
			fast = fast.next.next
			slow = slow.next
			if fast == slow:
				fast = pHead
				while fast != slow:
					fast = fast.next
					slow = slow.next
				return fast
		return None
		
		
p1 = ListNode(1)
p2 = ListNode(2)
p3 = ListNode(3)
p4 = ListNode(4)
p5 = ListNode(5)
p6 = ListNode(6)
p7 = ListNode(7)
p8 = ListNode(8)

p1.next, p2.next,p3.next, p4.next,p5.next, p6.next,p7.next, p8.next = p2,p3,p4,p5,p6,p7,p8,p4

from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.EntryNodeOfLoop)
tester.addTest(p1,p4)
tester.doTest()
