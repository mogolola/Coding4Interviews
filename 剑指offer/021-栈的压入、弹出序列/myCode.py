from leetcode_tester import Tester

class Solution:
	def IsPopOrder(self, pushV, popV):
		stack = []
		while popV:
			toPop = popV.pop(0)
			while pushV and not pushV[0]==toPop:
				toPush = pushV.pop(0)
				stack.append(toPush)
			if pushV and pushV[0] == toPop:
				toPush = pushV.pop(0)
				stack.append(toPush)
			if not toPop==stack[-1]:
				return False
			stack.pop()
		if not stack:
			return True
			
solution = Solution()
tester = Tester(solution.IsPopOrder)
tester.addTest([1,2,3,4,5],[4,5,3,2,1],True)
tester.addTest([1,2,3,4,5],[4,3,5,1,2],False)
tester.doTest()
		
