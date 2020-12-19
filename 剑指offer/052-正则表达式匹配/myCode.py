class Solution:
	def match(self, s, pattern):
		#如果s为空 必须pattern已经为空才为真，否则为假
		if len(s)==0 and len(pattern)==0:
			return True
		if len(pattern) == 0:
			return False
		#如果pattern的下一个不是*（包括pattern只剩一个字符的情况）
		if len(pattern)==1 or (len(pattern)>1 and pattern[1]!="*"):
			#如果s还有并且能够对的上pattern对应的字符，继续，否则返回False
			if len(s)>0 and (s[0]==pattern[0] or pattern[0]=="."):
				return self.match(s[1:],pattern[1:])
			else:
				return False
		#如果pattern的下一个为*
		else:
			re = False
			#如果当前s可以匹配pattern，那么pattern不变，继续
			if len(s)>0 and (s[0]==pattern[0] or pattern[0]=="."):
				re = self.match(s[1:],pattern)
			#只要s[1:]和pattern匹配(1个或数个pattern[0])或s和pattern[2:]匹配（0个pattern[0]）中有一种情况为True即可
			return re or self.match(s, pattern[2:])

from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.match)
tester.addTest('aaa','a.a',True)
tester.doTest()












			
