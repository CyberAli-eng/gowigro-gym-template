import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LeadCaptureForm from "./LeadCaptureForm";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal = ({ isOpen, onClose }: LeadCaptureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display text-2xl uppercase">Start Your Journey</DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <LeadCaptureForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
