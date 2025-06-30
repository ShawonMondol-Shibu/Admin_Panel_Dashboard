import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";
import {
  Textarea
} from "@/components/ui/textarea";
import {
  Button
} from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export default function SiteSettingsForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-4xl p-6 rounded-2xl shadow-md">
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <UploadCloud className="w-8 h-8 text-gray-500" />
            </div>
            <button className="text-sm text-blue-600 hover:underline mb-6">Upload Logo</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="site-name">Site Name</Label>
              <Input id="site-name" placeholder="Bright Web" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="copyright">Copy Right</Label>
              <Input id="copyright" placeholder="All rights Reserved@brightweb" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="seo-title">SEO Title</Label>
              <Input id="seo-title" placeholder="Bright web is a hybrid dashboard" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="seo-description">SEO Description</Label>
              <Textarea id="seo-description" placeholder="Bright web is a hybrid dashboard" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="seo-keywords">SEO Keywords</Label>
              <Input id="seo-keywords" placeholder="CEO" className="mt-1" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="px-10 py-2 text-base rounded-xl">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
