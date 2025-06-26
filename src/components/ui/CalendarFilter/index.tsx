'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getMonthDays } from './calendar-utils';

export default function CalendarFilter() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const days = getMonthDays(currentYear, currentMonth);

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
    setSelectedDay(null);
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
    setSelectedDay(null);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={handlePrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-sm font-semibold">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </h2>
        <Button variant="ghost" size="icon" onClick={handleNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={cn(
              'aspect-square text-sm rounded-md hover:bg-blue-100 transition',
              selectedDay === day
                ? 'bg-blue-500 text-white'
                : 'bg-transparent'
            )}
          >
            {day}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center">
        {selectedDay ? `You selected: ${selectedDay}` : 'No day selected'}
      </p>

      <Button className="mt-4 w-full">Apply Now</Button>
    </>
  );
}
