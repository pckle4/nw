
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, School, Trash2 } from 'lucide-react';
import { ResumeData, EducationItem } from '@/types/resume';

interface EducationFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, updateData }) => {
  const handleAddEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: ''
    };
    
    updateData({
      education: [...data.education, newEducation]
    });
  };

  const handleRemoveEducation = (id: string) => {
    updateData({
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  const handleEducationChange = (
    id: string,
    field: keyof EducationItem,
    value: string
  ) => {
    updateData({
      education: data.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-gray-600">Add your educational background, starting with your most recent degree.</p>
      </div>

      {data.education.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <School className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No education added</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your education.</p>
          <div className="mt-6">
            <Button onClick={handleAddEducation}>
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </div>
        </div>
      )}

      {data.education.map((education, index) => (
        <div key={education.id} className="p-6 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Education {index + 1}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemoveEducation(education.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`institution-${education.id}`}>Institution</Label>
              <Input
                id={`institution-${education.id}`}
                value={education.institution}
                onChange={(e) => handleEducationChange(education.id, 'institution', e.target.value)}
                placeholder="e.g., Stanford University"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${education.id}`}>Location</Label>
              <Input
                id={`location-${education.id}`}
                value={education.location}
                onChange={(e) => handleEducationChange(education.id, 'location', e.target.value)}
                placeholder="e.g., Stanford, CA"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`degree-${education.id}`}>Degree</Label>
              <Input
                id={`degree-${education.id}`}
                value={education.degree}
                onChange={(e) => handleEducationChange(education.id, 'degree', e.target.value)}
                placeholder="e.g., Bachelor of Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`field-${education.id}`}>Field of Study</Label>
              <Input
                id={`field-${education.id}`}
                value={education.field}
                onChange={(e) => handleEducationChange(education.id, 'field', e.target.value)}
                placeholder="e.g., Computer Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${education.id}`}>Start Date</Label>
              <Input
                id={`startDate-${education.id}`}
                value={education.startDate}
                onChange={(e) => handleEducationChange(education.id, 'startDate', e.target.value)}
                placeholder="e.g., Sep 2018"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${education.id}`}>End Date</Label>
              <Input
                id={`endDate-${education.id}`}
                value={education.endDate}
                onChange={(e) => handleEducationChange(education.id, 'endDate', e.target.value)}
                placeholder="e.g., Jun 2022"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`gpa-${education.id}`}>GPA (optional)</Label>
              <Input
                id={`gpa-${education.id}`}
                value={education.gpa}
                onChange={(e) => handleEducationChange(education.id, 'gpa', e.target.value)}
                placeholder="e.g., 3.8/4.0"
              />
            </div>
          </div>
        </div>
      ))}

      {data.education.length > 0 && (
        <Button 
          variant="outline" 
          onClick={handleAddEducation}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Another Education
        </Button>
      )}
    </div>
  );
};

export default EducationForm;
