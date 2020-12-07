from leetcode_tester import Tester
class Solution:
	def FindNumbersWithSum(self, array, tsum):
		i,j = 0,len(array)-1
		while j>i:
			if array[i] + array[j]>tsum:
				j-=1
			elif array[i] + array[j] < tsum:
				i+=1
			else:
				return [array[i],array[j]]
		return []

solution = Solution()
tester = Tester(solution.FindNumbersWithSum)
tester.addTest([1,2,4,7,11,15], 15, [4,11])
tester.addTest([1,2,3,4],15,[])
tester.doTest()
