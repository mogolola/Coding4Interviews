class Solution:
	def isDigit(self, c):
		return ord(c) >= ord("0") and ord(c) <= ord("9")
	def isNum(self, s):
		hasPoint = False
		for i in range(len(s)):
			c = s[i]
			if c == "+" or c == "-":
				if i > 0:
					return False
			elif ord(c) == ord("."):
				if not hasPoint:
					hasPoint = not hasPoint
				else:
					return False
				if i==0 or i==len(s)-1:
					return False
			elif not self.isDigit(s[i]):
				return False
		return True
	
	def isInt(self,s):
		for i in range(len(s)):
			c = s[i]
			if c == "+" or c == "-":
				if i > 0:
					return False
			elif not self.isDigit(s[i]):
				return False
		return True
	
	def isNumeric(self, s):
		for i in range(len(s)):
			c = s[i]
			if c == "e" or c == "E":
				if i==0 or i==len(s)-1:
					return False
				return self.isNum(s[:i-1]) and self.isInt(s[i+1:])
		return self.isNum(s)

from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.isNumeric)
tester.addTest("-.123", True)
#tester.addTest("5e2", True)
#tester.addTest("-123", True)
#tester.addTest("3.1415", True)
#tester.addTest("-1E-6", True)
#tester.addTest("12e", False)
#tester.addTest("1a3.14",False)
#tester.addTest("1.2.3", False)
#tester.addTest("12e+4.3", False)
tester.doTest()
				
