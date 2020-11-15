import { Publisher, Subjects, TicketCreatedEvent } from '@hktickets/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

