class Solution:
	def FindContinuousSequence(self, tsum):
		i,j = 1,2
		re = []
		tmp = 1+2
		while j>i:
			if tmp<tsum:
				j+=1
				tmp = tmp + j
			elif tmp > tsum:
				i+=1
				tmp = tmp - (i-1)
			else:
				re.append(list(range(i,j+1)))
				i+=1
				tmp = tmp - (i-1)
		return re
		

solution = Solution()
print(solution.FindContinuousSequence(3))
