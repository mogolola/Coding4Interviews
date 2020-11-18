class Solution:
	def getSmallest(self, nums):
		smallest = min(nums)
		index = nums.index(smallest)
		return (smallest,index)
		
	def genUglyNums(self, p ):
		return [2*self.result[p[0]], 3*self.result[p[1]], 5*self.result[p[2]]]
	def GetUglyNumber_Solution(self, index):
		p = [0,0,0]
		self.result = [1]
		for i in range(1, index+1):
			(smallest, i) = self.getSmallest(self.genUglyNums(p))
			self.result.append(smallest)
			p[i]+=1
		return self.result[-1]
		

solution = Solution()
print(solution.GetUglyNumber_Solution(7))
