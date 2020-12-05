from leetcode_tester import Tester

class Solution:
	def biSearch(self, arr, k):
		low = 0
		high = len(arr)-1
		while low <= high:
			mid = int((low + high) /2)
			if arr[mid] == k:
				return mid
			elif arr[mid]>k:
				high = mid -1
			else:
				low = mid + 1
		return -1
		
	def GetNumberOfK(self, data, k):
		i = self.biSearch(data, k)
		if i<0:
			return 0
		count = 1
		j = i-1
		while j>=0 and data[j] == k:
			count+=1
			j-=1
		j = i+1
		while j<len(data) and data[j] == k:
			count+=1
			j+=1
		return count
		
solution = Solution()
tester = Tester(solution.GetNumberOfK)
tester.addTest([1,2,3,4,5,5,5,5,6,7],5,4)
tester.doTest()

		
		

