from leetcode_tester import Tester

#[4,8,6,12,16,14,10]

class Solution:
	def doVerify(self,sequenece):
		if len(sequenece)<=1:
			return True
		root = sequenece.pop()
		left = []
		while sequenece and sequenece[0]<root:
			left.append(sequenece.pop(0))
		for x in sequenece:
			if x <root:
				return False
		right = sequenece
		return self.doVerify(left) and self.doVerify(right)
		
	
	def VerifySquenceOfBST(self, sequenece):
		if not sequenece:	return False
		return self.doVerify(sequenece)
		
solution = Solution()
tester = Tester(solution.VerifySquenceOfBST)
tester.addTest([4,8,6,12,16,14,10],True)
tester.addTest([4,9,8,6,14,16,12,2,10],False)
tester.addTest([1],True)
tester.doTest()
