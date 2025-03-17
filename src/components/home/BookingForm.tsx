
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import type { BookingFormData } from '@/types';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
    adults: 1,
    children: 0,
    promoCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to booking page with form data
    navigate('/booking', { state: { formData } });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden animate-scale-in">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-1">
        {/* Check In Date */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <Label htmlFor="check-in" className="text-xs text-gray-500 mb-1 block">Check In</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-start p-0 h-auto font-normal text-left"
              >
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span>{format(formData.checkIn, 'dd/MM/yyyy')}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
              <CalendarComponent
                mode="single"
                selected={formData.checkIn}
                onSelect={(date) => date && setFormData({ ...formData, checkIn: date })}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Check Out Date */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <Label htmlFor="check-out" className="text-xs text-gray-500 mb-1 block">Check Out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full justify-start p-0 h-auto font-normal text-left"
              >
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span>{format(formData.checkOut, 'dd/MM/yyyy')}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
              <CalendarComponent
                mode="single"
                selected={formData.checkOut}
                onSelect={(date) => date && setFormData({ ...formData, checkOut: date })}
                disabled={(date) => date <= formData.checkIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Adults */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <Label htmlFor="adults" className="text-xs text-gray-500 mb-1 block">Adults</Label>
          <Select 
            value={formData.adults.toString()} 
            onValueChange={(value) => setFormData({ ...formData, adults: parseInt(value) })}
          >
            <SelectTrigger className="border-0 p-0 h-auto font-normal shadow-none">
              <Users className="mr-2 h-4 w-4 opacity-70" />
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: 6 }, (_, i) => (
                  <SelectItem key={i} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        {/* Children */}
        <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <Label htmlFor="children" className="text-xs text-gray-500 mb-1 block">Children</Label>
          <Select 
            value={formData.children.toString()} 
            onValueChange={(value) => setFormData({ ...formData, children: parseInt(value) })}
          >
            <SelectTrigger className="border-0 p-0 h-auto font-normal shadow-none">
              <Users className="mr-2 h-4 w-4 opacity-70" />
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from({ length: 5 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        {/* Promo Code and Submit */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <Label htmlFor="promo-code" className="text-xs text-gray-500 mb-1 block">Promo Code</Label>
            <div className="flex items-center">
              <Tag className="h-4 w-4 opacity-70 mr-2" />
              <Input 
                id="promo-code" 
                value={formData.promoCode}
                onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                className="border-0 p-0 h-auto shadow-none"
                placeholder="Add code"
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="bg-hotel-primary hover:bg-hotel-primary/90 text-white self-end w-full lg:mt-3"
          >
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
