
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Plus, Trash2, CalendarIcon } from 'lucide-react';
import { ResumeData, ExperienceItem } from '@/types/resume';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

interface ExperienceFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, updateData }) => {
  const handleAddExperience = () => {
    const newExperience: ExperienceItem = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      current: false
    };
    
    updateData({
      experience: [...data.experience, newExperience]
    });
  };

  const handleRemoveExperience = (id: string) => {
    updateData({
      experience: data.experience.filter(exp => exp.id !== id)
    });
  };

  const handleExperienceChange = (
    id: string,
    field: keyof ExperienceItem,
    value: string | boolean
  ) => {
    updateData({
      experience: data.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const handleStartDateSelect = (id: string, date: Date | undefined) => {
    if (date) {
      handleExperienceChange(id, 'startDate', format(date, 'MMM yyyy'));
    }
  };

  const handleEndDateSelect = (id: string, date: Date | undefined) => {
    if (date) {
      handleExperienceChange(id, 'endDate', format(date, 'MMM yyyy'));
    }
  };

  const toggleCurrentJob = (id: string, checked: boolean) => {
    const exp = data.experience.find(e => e.id === id);
    if (exp) {
      handleExperienceChange(id, 'current', checked);
      if (checked) {
        handleExperienceChange(id, 'endDate', 'Present');
      } else if (exp.endDate === 'Present') {
        handleExperienceChange(id, 'endDate', '');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p className="text-gray-600">Add your relevant work history, starting with your most recent position.</p>
      </div>

      {data.experience.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No work experience added</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your work experience.</p>
          <div className="mt-6">
            <Button onClick={handleAddExperience}>
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </div>
        </div>
      )}

      {data.experience.map((experience, index) => (
        <div key={experience.id} className="p-6 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Experience {index + 1}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveExperience(experience.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`company-${experience.id}`}>Company <span className="text-red-500">*</span></Label>
              <Input
                id={`company-${experience.id}`}
                value={experience.company}
                onChange={(e) => handleExperienceChange(experience.id, 'company', e.target.value)}
                placeholder="e.g., Acme Corporation"
                className="placeholder:text-blue-300 border-gray-300 focus:border-resume-purple"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`position-${experience.id}`}>Position <span className="text-red-500">*</span></Label>
              <Input
                id={`position-${experience.id}`}
                value={experience.position}
                onChange={(e) => handleExperienceChange(experience.id, 'position', e.target.value)}
                placeholder="e.g., Senior Developer"
                className="placeholder:text-green-300 border-gray-300 focus:border-resume-purple"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${experience.id}`}>Location <span className="text-red-500">*</span></Label>
              <Input
                id={`location-${experience.id}`}
                value={experience.location}
                onChange={(e) => handleExperienceChange(experience.id, 'location', e.target.value)}
                placeholder="e.g., San Francisco, CA"
                className="placeholder:text-purple-300 border-gray-300 focus:border-resume-purple"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Start Date <span className="text-red-500">*</span></Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-gray-300",
                      !experience.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {experience.startDate ? experience.startDate : "Select start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    onSelect={(date) => handleStartDateSelect(experience.id, date)}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2 flex flex-col">
              <Label>End Date</Label>
              <div className="flex items-center space-x-2 mb-2">
                <Checkbox 
                  id={`current-${experience.id}`} 
                  checked={experience.current}
                  onCheckedChange={(checked) => toggleCurrentJob(experience.id, checked === true)}
                />
                <label
                  htmlFor={`current-${experience.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I currently work here
                </label>
              </div>
              {!experience.current && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-300",
                        !experience.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {experience.endDate ? experience.endDate : "Select end date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      onSelect={(date) => handleEndDateSelect(experience.id, date)}
                      disabled={experience.current}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${experience.id}`}>Description <span className="text-red-500">*</span></Label>
            <Textarea
              id={`description-${experience.id}`}
              value={experience.description}
              onChange={(e) => handleExperienceChange(experience.id, 'description', e.target.value)}
              placeholder="Describe your responsibilities, achievements, and the skills you used or developed."
              rows={4}
              className="placeholder:text-yellow-300 border-gray-300 focus:border-resume-purple"
              required
            />
          </div>
        </div>
      ))}

      {data.experience.length > 0 && (
        <Button 
          variant="outline" 
          onClick={handleAddExperience}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Another Experience
        </Button>
      )}
    </div>
  );
};

export default ExperienceForm;
