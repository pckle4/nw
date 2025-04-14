
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, FolderGit2, Trash2, CalendarIcon } from 'lucide-react';
import { ResumeData, ProjectItem } from '@/types/resume';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ProjectsFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ data, updateData }) => {
  const handleAddProject = () => {
    const newProject: ProjectItem = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: '',
      date: ''
    };
    
    updateData({
      projects: [...data.projects, newProject]
    });
  };

  const handleRemoveProject = (id: string) => {
    updateData({
      projects: data.projects.filter(project => project.id !== id)
    });
  };

  const handleProjectChange = (
    id: string,
    field: keyof ProjectItem,
    value: string
  ) => {
    updateData({
      projects: data.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    });
  };

  const handleDateSelect = (id: string, date: Date | undefined) => {
    if (date) {
      handleProjectChange(id, 'date', format(date, 'MMM yyyy'));
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-gray-600">Add relevant projects that showcase your skills and accomplishments.</p>
      </div>

      {data.projects.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <FolderGit2 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects added</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your projects.</p>
          <div className="mt-6">
            <Button onClick={handleAddProject}>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>
        </div>
      )}

      {data.projects.map((project, index) => (
        <div key={project.id} className="p-6 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Project {index + 1}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveProject(project.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${project.id}`}>Project Name <span className="text-red-500">*</span></Label>
              <Input
                id={`name-${project.id}`}
                value={project.name}
                onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)}
                placeholder="e.g., E-commerce Website"
                className="placeholder:text-blue-300 border-gray-300 focus:border-resume-purple"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Completion Date <span className="text-red-500">*</span></Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-gray-300",
                      !project.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {project.date ? project.date : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    onSelect={(date) => handleDateSelect(project.id, date)}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`technologies-${project.id}`}>Technologies Used <span className="text-red-500">*</span></Label>
              <Input
                id={`technologies-${project.id}`}
                value={project.technologies}
                onChange={(e) => handleProjectChange(project.id, 'technologies', e.target.value)}
                placeholder="e.g., React, Node.js, MongoDB"
                className="placeholder:text-green-300 border-gray-300 focus:border-resume-purple"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`link-${project.id}`}>Project Link (optional)</Label>
              <Input
                id={`link-${project.id}`}
                value={project.link}
                onChange={(e) => handleProjectChange(project.id, 'link', e.target.value)}
                placeholder="e.g., https://github.com/yourname/project"
                className="placeholder:text-purple-300 border-gray-300 focus:border-resume-purple"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${project.id}`}>Description <span className="text-red-500">*</span></Label>
            <Textarea
              id={`description-${project.id}`}
              value={project.description}
              onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
              placeholder="Describe the project, your role, and the impact it had."
              rows={3}
              className="placeholder:text-yellow-300 border-gray-300 focus:border-resume-purple"
              required
            />
          </div>
        </div>
      ))}

      {data.projects.length > 0 && (
        <Button 
          variant="outline" 
          onClick={handleAddProject}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Another Project
        </Button>
      )}
    </div>
  );
};

export default ProjectsForm;
