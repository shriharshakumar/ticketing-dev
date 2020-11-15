import { Publisher, Subjects, TicketUpdatedEvent } from '@hktickets/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

