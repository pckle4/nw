
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, Star, Plus, Trash2, Info } from 'lucide-react';
import { ResumeData } from '@/types/resume';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useToast } from '@/components/ui/use-toast';

interface SkillsFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, updateData }) => {
  const [newSkill, setNewSkill] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [currentCategory, setCurrentCategory] = useState('technical');
  const [skillLevel, setSkillLevel] = useState<number>(3);
  const { toast } = useToast();

  const categories = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'languages', label: 'Languages' },
    ...data.skillCategories.map(cat => ({ id: cat.id, label: cat.name }))
  ];

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    
    const skillExists = data.skills.some(
      s => s.name.toLowerCase() === newSkill.toLowerCase() && s.category === currentCategory
    );
    
    if (skillExists) {
      toast({
        title: "Skill already exists",
        description: `${newSkill} is already in your ${categories.find(c => c.id === currentCategory)?.label} list.`,
        variant: "destructive"
      });
      setNewSkill('');
      return;
    }
    
    const skill = {
      id: Date.now().toString(),
      name: newSkill.trim(),
      category: currentCategory,
      level: skillLevel
    };
    
    updateData({
      skills: [...data.skills, skill]
    });
    
    toast({
      title: "Skill added",
      description: `${newSkill} has been added to your skills.`,
    });
    
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    updateData({
      skills: data.skills.filter(skill => skill.id !== id)
    });
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    
    const categoryExists = data.skillCategories.some(
      cat => cat.name.toLowerCase() === newCategory.toLowerCase()
    );
    
    if (categoryExists) {
      toast({
        title: "Category already exists",
        description: `${newCategory} category is already in your list.`,
        variant: "destructive"
      });
      setNewCategory('');
      return;
    }
    
    const category = {
      id: Date.now().toString(),
      name: newCategory.trim()
    };
    
    updateData({
      skillCategories: [...data.skillCategories, category]
    });
    
    setCurrentCategory(category.id);
    setNewCategory('');
    
    toast({
      title: "Category added",
      description: `${newCategory} category has been created.`,
    });
  };

  const getSkillsByCategory = (categoryId: string) => {
    return data.skills.filter(skill => skill.category === categoryId);
  };

  const handleDeleteCategory = (categoryId: string) => {
    if (categoryId === 'technical' || categoryId === 'soft' || categoryId === 'languages') {
      toast({
        title: "Cannot delete default category",
        description: "Default categories cannot be deleted.",
        variant: "destructive"
      });
      return;
    }
    
    // Delete all skills in this category
    const updatedSkills = data.skills.filter(skill => skill.category !== categoryId);
    
    // Delete the category
    const updatedCategories = data.skillCategories.filter(cat => cat.id !== categoryId);
    
    updateData({
      skills: updatedSkills,
      skillCategories: updatedCategories
    });
    
    // Switch to technical category
    setCurrentCategory('technical');
    
    toast({
      title: "Category deleted",
      description: "Category and all its skills have been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-gray-600">Add skills that showcase your strengths and abilities.</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center">
              <Button
                variant={currentCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentCategory(category.id)}
                className="whitespace-nowrap rounded-r-none"
              >
                {category.label}
              </Button>
              {(category.id !== 'technical' && category.id !== 'soft' && category.id !== 'languages') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteCategory(category.id)}
                  className="px-2 rounded-l-none border-l-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.getElementById('add-category-input')?.focus()}
            className="whitespace-nowrap"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Category
          </Button>
        </div>

        {/* Add new category */}
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id="add-category-input"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter a new skill category..."
              onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
              className="border-dashed border-gray-300 focus:border-resume-purple placeholder:text-purple-300"
            />
          </div>
          <Button onClick={handleAddCategory} disabled={!newCategory.trim()}>
            Add
          </Button>
        </div>

        {/* Current category skills */}
        <div className="p-4 border rounded-lg bg-gray-50 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">
              {categories.find(cat => cat.id === currentCategory)?.label || 'Skills'}
            </h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Info className="h-4 w-4 text-gray-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-xs">Rate your proficiency from 1-5. This helps employers understand your expertise level.</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-wrap gap-2 min-h-16">
            {getSkillsByCategory(currentCategory).length === 0 ? (
              <p className="text-gray-500 italic text-center w-full py-2">No skills added yet</p>
            ) : (
              getSkillsByCategory(currentCategory).map(skill => (
                <Badge 
                  key={skill.id} 
                  variant="secondary"
                  className="px-3 py-1.5 text-sm flex items-center gap-1 bg-gradient-to-r from-purple-50 to-white"
                >
                  <span>{skill.name}</span>
                  <div className="ml-1 flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span 
                        key={index}
                        className={`inline-block h-1.5 w-1.5 rounded-full mx-0.5 ${
                          index < (skill.level || 0) ? 'bg-resume-purple' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill.id)}
                    className="ml-1 hover:text-red-500 focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))
            )}
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder={`Enter a ${categories.find(cat => cat.id === currentCategory)?.label?.toLowerCase() || 'skill'}...`}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                  className="border-dashed border-gray-300 focus:border-resume-purple placeholder:text-purple-300"
                />
              </div>
              <Button onClick={handleAddSkill} disabled={!newSkill.trim()}>
                Add
              </Button>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Proficiency Level:</label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Beginner</span>
                <div className="flex gap-2 flex-1 justify-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`h-6 w-6 rounded-full transition-all ${
                        index < skillLevel 
                          ? 'bg-resume-purple' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      onClick={() => setSkillLevel(index + 1)}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.skills.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-lg mt-4 bg-gradient-to-r from-purple-50 to-white animate-pulse">
          <Star className="mx-auto h-12 w-12 text-resume-purple opacity-40" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No skills added</h3>
          <p className="mt-1 text-sm text-gray-500">Start adding skills to showcase your abilities.</p>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;
