import sys
class Solution:
	def charIsNum(self, c):
		if ord(c)>=48 and ord(c)<=57:
			return True
		else:
			return False
	
	def StrToInt(self, s):
		if not s:	return 0
		s = s.strip()
		if s == "":	return 0
		flag = 1
		res = 0
		if s[0] == "-":	flag = -1
		if s[0] == "-" or s[0] == "+":
			s = s[1:]
		for c in s:
			if not self.charIsNum(c):
				return 0
			else:
				cur = ord(c)-48
				res = res *10 + cur
		return res * flag
				
			
from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.strToInt)
tester.addTest("+2147483647",2147483647)
tester.addTest("",0)
tester.doTest()
