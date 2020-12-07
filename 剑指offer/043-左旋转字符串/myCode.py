from leetcode_tester import Tester

class Solution:
	def LeftRotateString(self, s,n):
		if not s:
			return ""
		n = n % len(s)
		s = s[n:]+s[:n]
		return s

solution = Solution()
tester = Tester(solution.LeftRotateString)
tester.addTest("abcXYZdef",3,"XYZdefabc")
tester.addTest("",6,"")
tester.doTest()
