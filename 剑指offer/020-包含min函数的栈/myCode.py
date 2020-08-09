from leetcode_tester import Tester

class Solution:
	def __init__(self):
		self.stack = []
		self.min_stack=[]

	def push(self,node):
		self.stack.append(node)
		if not self.min_stack:
			self.min_stack.append(node)
		elif self.min_stack[-1]<node:
			self.min_stack.append(self.min_stack[-1])
		else:
			self.min_stack.append(node)
		
	def pop(self):
		self.min_stack.pop()
		return self.stack.pop()
	
	def top(self):
		self.min_stack.pop(0)
		return self.stack.pop(0)
		
	def min(self):
		return self.min_stack[-1]
