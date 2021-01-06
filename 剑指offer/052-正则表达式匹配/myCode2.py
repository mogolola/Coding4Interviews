class Solution:
	def match(self, s, pattern):
		if len(s)==0:
			if len(pattern)==0:
				return True
			elif len(pattern)>1 and pattern[-1] == "*":
				return self.match(s,pattern[:-2])
			else:
				return False
		if len(pattern) == 0:
			return False
		if pattern[-1]!="*":
			if pattern[-1]=="." or s[-1]==pattern[-1]:
				return self.match(s[:-1], pattern[:-1])
			else:
				return False
		else:
			if len(pattern)<2:
				return False
			re = False
			if pattern[-2] == s[-1] or pattern[-2] == ".":
				re = self.match(s[:-1], pattern)
			return re or self.match(s, pattern[:-2])
from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.match)
#tester.addTest('aaa','ab*ac*a',True)
#tester.addTest('aaa','a.a', True)
#tester.addTest('aa.a','ab*a',False)
tester.addTest("aab", "c*a*b", True)
tester.doTest()
