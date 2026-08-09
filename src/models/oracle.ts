import type { OracleMessageRole } from '../types/oracle';

export interface OracleConversation {
  id: string;
  userId: string;
  /** The reading this conversation is attached to, if any. */
  readingId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OracleMessage {
  id: string;
  conversationId: string;
  role: OracleMessageRole;
  content: string;
  createdAt: string;
}
