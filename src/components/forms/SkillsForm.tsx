import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, Star, Plus } from 'lucide-react';
import { ResumeData } from '@/types/resume';
import FieldAiTip from "./FieldAiTip";
import { MoveRight } from "lucide-react";

interface SkillsFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const aiTips = {
  skillInput: "Type a skill and press Add, or quickly drag from the predefined list below. Focus on job-relevant strengths.",
  categoryInput: "Create new categories to better organize your skillset, e.g. add 'DevOps'.",
};

const predefinedSkillCategories = [
  { id: "technical", label: "Technical Skills", skills: [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Node.js",
    "TailwindCSS", "Git", "REST API", "GraphQL", "Docker", "CI/CD"
  ]},
  { id: "soft", label: "Soft Skills", skills: [
    "Collaboration", "Leadership", "Communication", "Problem Solving", "Time Management", "Critical Thinking"
  ]},
  { id: "languages", label: "Languages", skills: [
    "English", "Spanish", "French", "Mandarin", "Hindi", "German"
  ]},
];

const SkillsForm: React.FC<SkillsFormProps> = ({ data, updateData }) => {
  const [newSkill, setNewSkill] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [currentCategory, setCurrentCategory] = useState('technical');

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
      setNewSkill('');
      return;
    }
    
    const skill = {
      id: Date.now().toString(),
      name: newSkill.trim(),
      category: currentCategory
    };
    
    updateData({
      skills: [...data.skills, skill]
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
  };

  const handleDragStart = (e: React.DragEvent, skill: string, category: string) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ skill, category }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (!item) return;
    try {
      const { skill, category } = JSON.parse(item);
      if (
        !data.skills.some(
          (s) => s.name.toLowerCase() === skill.toLowerCase() && s.category === category
        )
      ) {
        updateData({
          skills: [
            ...data.skills,
            {
              id: Date.now().toString(),
              name: skill,
              category,
            },
          ],
        });
      }
    } catch (e) {}
  };

  const getSkillsByCategory = (categoryId: string) => {
    return data.skills.filter(skill => skill.category === categoryId);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-gray-600 flex items-center">
          Add skills that showcase your strengths and abilities.
          <FieldAiTip tip="Include both technical and soft skills relevant to your target job. Drag skills from the suggestions below for easy entry!" />
        </p>
      </div>
      <div className="mb-4">
        <div className="pb-1 font-semibold text-gray-700 flex items-center">
          Suggested Skills
          <MoveRight className="inline-block ml-2 h-4 w-4 text-green-500 animate-bounce" />
        </div>
        <div className="flex flex-wrap gap-2">
          {predefinedSkillCategories.map((cat) =>
            cat.skills.map((skill) => (
              <span
                key={cat.id + skill}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-3 py-1 rounded-xl text-xs mb-1 border border-gray-200 shadow cursor-grab hover:bg-blue-200 transition"
                draggable
                onDragStart={(e) => handleDragStart(e, skill, cat.id)}
                title={`Drag to add "${skill}" to your ${cat.label}`}
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={currentCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.label}
            </Button>
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
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id="add-category-input"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter a new skill category..."
              onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
            />
          </div>
          <Button onClick={handleAddCategory} disabled={!newCategory.trim()}>
            Add
          </Button>
          <FieldAiTip tip={aiTips.categoryInput} />
        </div>
        <div
          className="p-4 border rounded-lg bg-gray-50 space-y-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <h3 className="font-medium">
            {categories.find((cat) => cat.id === currentCategory)?.label || "Skills"}
          </h3>
          <div className="flex flex-wrap gap-2 min-h-16">
            {getSkillsByCategory(currentCategory).length === 0 ? (
              <p className="text-gray-500 italic">No skills added yet</p>
            ) : (
              getSkillsByCategory(currentCategory).map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className="px-3 py-1 text-sm flex items-center gap-1"
                >
                  {skill.name}
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
          <div className="flex gap-2 items-center">
            <div className="flex-1">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder={`Enter a ${categories.find((cat) => cat.id === currentCategory)?.label?.toLowerCase() || "skill"}...`}
                onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
              />
            </div>
            <Button onClick={handleAddSkill} disabled={!newSkill.trim()}>
              Add
            </Button>
            <FieldAiTip tip={aiTips.skillInput} />
          </div>
        </div>
      </div>
      {data.skills.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-lg mt-4">
          <Star className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No skills added</h3>
          <p className="mt-1 text-sm text-gray-500">Start adding skills to showcase your abilities.</p>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;
