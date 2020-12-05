class Solution:
	def FindNumsAppearOnce(self, array):
		xor=0
		for i in range(len(array)):
			xor ^= array[i]
		index = 1
		while (index & xor) == 0:
			index = index << 1
		result1 = 0
		result2 = 0
		for i in range(len(array)):
			if array[i] & index:
				result1 ^= array[i]
			else:
				result2 ^= array[i]
		return [result1, result2]
		
from leetcode_tester import Tester
solution = Solution()
tester = Tester(solution.FindNumsAppearOnce)
tester.addTest([1,2,2,3,3,4,5,5,6,6],[1,4])
tester.doTest()
