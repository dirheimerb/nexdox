export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      agreeable: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'agreeable_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      app_permissions: {
        Row: {
          create: boolean;
          created_at: string;
          delete: boolean;
          enabled: boolean;
          id: string;
          object: string;
          read: boolean;
          update: boolean;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          create?: boolean;
          created_at?: string;
          delete?: boolean;
          enabled?: boolean;
          id?: string;
          object: string;
          read?: boolean;
          update?: boolean;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          create?: boolean;
          created_at?: string;
          delete?: boolean;
          enabled?: boolean;
          id?: string;
          object?: string;
          read?: boolean;
          update?: boolean;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'app_permissions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      bank_account: {
        Row: {
          account_id: number;
          balance: number;
          created_at: string;
          id: string;
          transaction: string | null;
          updated_at: string;
        };
        Insert: {
          account_id: number;
          balance?: number;
          created_at?: string;
          id?: string;
          transaction?: string | null;
          updated_at?: string;
        };
        Update: {
          account_id?: number;
          balance?: number;
          created_at?: string;
          id?: string;
          transaction?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'bank_account_transaction_fkey';
            columns: ['transaction'];
            referencedRelation: 'transaction';
            referencedColumns: ['id'];
          },
        ];
      };
      categories: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'categories_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      category: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          post_id: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name: string;
          post_id: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string;
          post_id?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'category_post_id_fkey';
            columns: ['post_id'];
            referencedRelation: 'post';
            referencedColumns: ['id'];
          },
        ];
      };
      chore: {
        Row: {
          created_at: string;
          description: string;
          id: string;
          member_id: string | null;
          name: string;
          reward: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description: string;
          id?: string;
          member_id?: string | null;
          name: string;
          reward: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: string;
          member_id?: string | null;
          name?: string;
          reward?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chore_member_id_fkey';
            columns: ['member_id'];
            referencedRelation: 'member';
            referencedColumns: ['id'];
          },
        ];
      };
      city: {
        Row: {
          city: string;
          created_at: string;
          id: string;
          user_id: string | null;
        };
        Insert: {
          city: string;
          created_at?: string;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          city?: string;
          created_at?: string;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'city_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      code_snippets: {
        Row: {
          code: string;
          created_at: string;
          id: string;
          language: string;
          title: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          code: string;
          created_at?: string;
          id?: string;
          language: string;
          title: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Update: {
          code?: string;
          created_at?: string;
          id?: string;
          language?: string;
          title?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'code_snippets_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      comments: {
        Row: {
          author_id: string;
          content: string;
          created_at: string;
          id: number;
          post_id: number;
          published_date: string;
          updated_at: string | null;
        };
        Insert: {
          author_id?: string;
          content: string;
          created_at?: string;
          id?: number;
          post_id: number;
          published_date?: string;
          updated_at?: string | null;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string;
          id?: number;
          post_id?: number;
          published_date?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_author_id_fkey';
            columns: ['author_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_post_id_fkey';
            columns: ['post_id'];
            referencedRelation: 'post';
            referencedColumns: ['id'];
          },
        ];
      };
      conscientious: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'conscientious_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      contact: {
        Row: {
          city: string | null;
          country: string | null;
          created_at: string;
          email: string | null;
          first_name: string;
          id: string;
          last_name: string | null;
          notes: string | null;
          phone_number: string;
          phone_type: string | null;
          postal_code: string | null;
          state: string | null;
          street: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          city?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          first_name: string;
          id?: string;
          last_name?: string | null;
          notes?: string | null;
          phone_number: string;
          phone_type?: string | null;
          postal_code?: string | null;
          state?: string | null;
          street?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          city?: string | null;
          country?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string;
          id?: string;
          last_name?: string | null;
          notes?: string | null;
          phone_number?: string;
          phone_type?: string | null;
          postal_code?: string | null;
          state?: string | null;
          street?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'contact_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      countries: {
        Row: {
          abbr: string;
          created_at: string;
          id: number;
          name: string;
          updated_at: string;
        };
        Insert: {
          abbr: string;
          created_at?: string;
          id?: number;
          name: string;
          updated_at?: string;
        };
        Update: {
          abbr?: string;
          created_at?: string;
          id?: number;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      daily_goals: {
        Row: {
          created_at: string;
          goal_id: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          goal_id: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          goal_id?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'daily_goals_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
      documents: {
        Row: {
          content: string | null;
          embedding: string | null;
          id: number;
          metadata: Json | null;
        };
        Insert: {
          content?: string | null;
          embedding?: string | null;
          id?: number;
          metadata?: Json | null;
        };
        Update: {
          content?: string | null;
          embedding?: string | null;
          id?: number;
          metadata?: Json | null;
        };
        Relationships: [];
      };
      events: {
        Row: {
          created_at: string;
          description: string | null;
          end_date: string;
          id: string;
          location: string | null;
          project_id: string | null;
          start_date: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          end_date: string;
          id?: string;
          location?: string | null;
          project_id?: string | null;
          start_date: string;
          title: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          end_date?: string;
          id?: string;
          location?: string | null;
          project_id?: string | null;
          start_date?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'events_project_id_fkey';
            columns: ['project_id'];
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'events_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      extroverted: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'extroverted_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      game_results: {
        Row: {
          away_score: number;
          away_team: string;
          completed: boolean;
          created_at: string;
          home_score: number;
          home_team: string;
          id: string;
          results: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          away_score: number;
          away_team: string;
          completed?: boolean;
          created_at?: string;
          home_score: number;
          home_team: string;
          id?: string;
          results: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          away_score?: number;
          away_team?: string;
          completed?: boolean;
          created_at?: string;
          home_score?: number;
          home_team?: string;
          id?: string;
          results?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      games: {
        Row: {
          created_at: string | null;
          date: string | null;
          id: number;
          opponent: string;
          time: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          date?: string | null;
          id?: number;
          opponent: string;
          time?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          date?: string | null;
          id?: number;
          opponent?: string;
          time?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      goal: {
        Row: {
          completed: boolean;
          created_at: string;
          description: string | null;
          due_date: string | null;
          id: string;
          recurrence: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          completed?: boolean;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          recurrence?: string;
          title: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          completed?: boolean;
          created_at?: string;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          recurrence?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goal_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      goal_achievement: {
        Row: {
          created_at: string;
          date_achieved: string | null;
          description: string | null;
          goal_id: string | null;
          id: number;
          title: string;
        };
        Insert: {
          created_at?: string;
          date_achieved?: string | null;
          description?: string | null;
          goal_id?: string | null;
          id?: number;
          title: string;
        };
        Update: {
          created_at?: string;
          date_achieved?: string | null;
          description?: string | null;
          goal_id?: string | null;
          id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goal_achievement_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
      goal_category: {
        Row: {
          created_at: string;
          goal_id: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          goal_id?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          goal_id?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goal_category_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
      goal_comments: {
        Row: {
          created_at: string | null;
          goal_id: string | null;
          id: number;
          note: string | null;
        };
        Insert: {
          created_at?: string | null;
          goal_id?: string | null;
          id?: number;
          note?: string | null;
        };
        Update: {
          created_at?: string | null;
          goal_id?: string | null;
          id?: number;
          note?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'goal_comments_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
      goal_settings: {
        Row: {
          created_at: string;
          id: number;
          notifications: boolean;
          show_completed: boolean;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          notifications?: boolean;
          show_completed?: boolean;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          notifications?: boolean;
          show_completed?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goal_settings_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      grocery_item: {
        Row: {
          created_at: string;
          grocery_list: string;
          id: string;
          is_purchased: boolean;
          name: string;
          quantity: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          grocery_list: string;
          id?: string;
          is_purchased?: boolean;
          name: string;
          quantity?: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          grocery_list?: string;
          id?: string;
          is_purchased?: boolean;
          name?: string;
          quantity?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'grocery_item_grocery_list_fkey';
            columns: ['grocery_list'];
            referencedRelation: 'grocery_list';
            referencedColumns: ['id'];
          },
        ];
      };
      grocery_list: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'grocery_list_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      honesty: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'honesty_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      locations: {
        Row: {
          country: string | null;
          created_at: string;
          id: string;
          lat: number | null;
          lon: number | null;
          name: string | null;
          region: string | null;
          updated_at: string;
          url: string | null;
        };
        Insert: {
          country?: string | null;
          created_at?: string;
          id?: string;
          lat?: number | null;
          lon?: number | null;
          name?: string | null;
          region?: string | null;
          updated_at?: string;
          url?: string | null;
        };
        Update: {
          country?: string | null;
          created_at?: string;
          id?: string;
          lat?: number | null;
          lon?: number | null;
          name?: string | null;
          region?: string | null;
          updated_at?: string;
          url?: string | null;
        };
        Relationships: [];
      };
      meal: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          name: string;
          updated_at: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      meal_prep: {
        Row: {
          created_at: string;
          day: string | null;
          id: string;
          name: string | null;
          recipe_id: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          day?: string | null;
          id?: string;
          name?: string | null;
          recipe_id?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          day?: string | null;
          id?: string;
          name?: string | null;
          recipe_id?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'meal_prep_recipe_id_fkey';
            columns: ['recipe_id'];
            referencedRelation: 'recipe';
            referencedColumns: ['id'];
          },
        ];
      };
      member: {
        Row: {
          age: number;
          created_at: string;
          id: string;
          is_adult: boolean;
          name: string;
          updated_at: string;
        };
        Insert: {
          age: number;
          created_at?: string;
          id?: string;
          is_adult?: boolean;
          name: string;
          updated_at?: string;
        };
        Update: {
          age?: number;
          created_at?: string;
          id?: string;
          is_adult?: boolean;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      monthly_goal: {
        Row: {
          created_at: string;
          goal_id: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          goal_id: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          goal_id?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'monthly_goal_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
      neurotic: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'neurotic_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      newsletter: {
        Row: {
          created_at: string;
          email: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: number;
        };
        Relationships: [];
      };
      nods_page: {
        Row: {
          checksum: string | null;
          id: number;
          meta: Json | null;
          parent_page_id: number | null;
          path: string;
          source: string | null;
          type: string | null;
        };
        Insert: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path: string;
          source?: string | null;
          type?: string | null;
        };
        Update: {
          checksum?: string | null;
          id?: number;
          meta?: Json | null;
          parent_page_id?: number | null;
          path?: string;
          source?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nods_page_parent_page_id_fkey';
            columns: ['parent_page_id'];
            referencedRelation: 'nods_page';
            referencedColumns: ['id'];
          },
        ];
      };
      nods_page_section: {
        Row: {
          content: string | null;
          embedding: string | null;
          heading: string | null;
          id: number;
          page_id: number;
          slug: string | null;
          token_count: number | null;
        };
        Insert: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id: number;
          slug?: string | null;
          token_count?: number | null;
        };
        Update: {
          content?: string | null;
          embedding?: string | null;
          heading?: string | null;
          id?: number;
          page_id?: number;
          slug?: string | null;
          token_count?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nods_page_section_page_id_fkey';
            columns: ['page_id'];
            referencedRelation: 'nods_page';
            referencedColumns: ['id'];
          },
        ];
      };
      note_document: {
        Row: {
          category: string | null;
          content: string | null;
          created_at: string;
          id: number;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          category?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          title: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          category?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'note_document_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      notes: {
        Row: {
          created_at: string;
          file: string | null;
          id: string;
          mood: string | null;
          task_id: number;
          text: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          file?: string | null;
          id?: string;
          mood?: string | null;
          task_id: number;
          text: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          file?: string | null;
          id?: string;
          mood?: string | null;
          task_id?: number;
          text?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notes_task_id_fkey';
            columns: ['task_id'];
            referencedRelation: 'tasks';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'notes_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      notifications: {
        Row: {
          account: boolean;
          created_at: string;
          id: string;
          tasks: boolean;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          account?: boolean;
          created_at?: string;
          id?: string;
          tasks?: boolean;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          account?: boolean;
          created_at?: string;
          id?: string;
          tasks?: boolean;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      openness: {
        Row: {
          a1: boolean;
          a10: boolean;
          a2: boolean;
          a3: boolean;
          a4: boolean;
          a5: boolean;
          a6: boolean;
          a7: boolean;
          a8: boolean;
          a9: boolean;
          created_at: string;
          id: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level: string;
          q1: string;
          q10: string;
          q2: string;
          q3: string;
          q4: string;
          q5: string;
          q6: string;
          q7: string;
          q8: string;
          q9: string;
          score: number;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          a1?: boolean;
          a10?: boolean;
          a2?: boolean;
          a3?: boolean;
          a4?: boolean;
          a5?: boolean;
          a6?: boolean;
          a7?: boolean;
          a8?: boolean;
          a9?: boolean;
          created_at?: string;
          id?: string;
          level?: string;
          q1?: string;
          q10?: string;
          q2?: string;
          q3?: string;
          q4?: string;
          q5?: string;
          q6?: string;
          q7?: string;
          q8?: string;
          q9?: string;
          score?: number;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'openness_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      players: {
        Row: {
          created_at: string;
          field_position: string;
          id: number;
          is_active: boolean;
          name: string;
          number: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          field_position: string;
          id?: number;
          is_active?: boolean;
          name: string;
          number: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          field_position?: string;
          id?: number;
          is_active?: boolean;
          name?: string;
          number?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      post: {
        Row: {
          author_id: string;
          content: string;
          created_at: string;
          html: string | null;
          id: number;
          is_published: boolean;
          markdown: Json | null;
          published_date: string | null;
          title: string;
          updated_at: string | null;
        };
        Insert: {
          author_id?: string;
          content: string;
          created_at?: string;
          html?: string | null;
          id?: number;
          is_published?: boolean;
          markdown?: Json | null;
          published_date?: string | null;
          title: string;
          updated_at?: string | null;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string;
          html?: string | null;
          id?: number;
          is_published?: boolean;
          markdown?: Json | null;
          published_date?: string | null;
          title?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'post_author_id_fkey';
            columns: ['author_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      project: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          name: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          name: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          name?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      recipe: {
        Row: {
          created_at: string;
          id: string;
          ingredients: string | null;
          instructions: string | null;
          name: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          ingredients?: string | null;
          instructions?: string | null;
          name?: string | null;
          updated_at: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          ingredients?: string | null;
          instructions?: string | null;
          name?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'recipe_ingredients_fkey';
            columns: ['ingredients'];
            referencedRelation: 'recipe_item';
            referencedColumns: ['id'];
          },
        ];
      };
      recipe_item: {
        Row: {
          created_at: string | null;
          id: string;
          ingredient: string | null;
          quantity: number | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          ingredient?: string | null;
          quantity?: number | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          ingredient?: string | null;
          quantity?: number | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      roster: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
          players: number;
          status: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name: string;
          players: number;
          status: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string;
          players?: number;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'roster_players_fkey';
            columns: ['players'];
            referencedRelation: 'players';
            referencedColumns: ['id'];
          },
        ];
      };
      saved_location: {
        Row: {
          country: string;
          created_at: string;
          id: number;
          lat: number;
          location_id: string;
          lon: number;
          name: string;
          postal_code: string;
          region: string;
          url: string;
          user_id: string;
        };
        Insert: {
          country: string;
          created_at?: string;
          id?: number;
          lat: number;
          location_id: string;
          lon: number;
          name: string;
          postal_code: string;
          region: string;
          url: string;
          user_id?: string;
        };
        Update: {
          country?: string;
          created_at?: string;
          id?: number;
          lat?: number;
          location_id?: string;
          lon?: number;
          name?: string;
          postal_code?: string;
          region?: string;
          url?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'saved_location_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      states: {
        Row: {
          created_at: string;
          id: string;
          state_abbv: string;
          state_name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          state_abbv: string;
          state_name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          state_abbv?: string;
          state_name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      tag: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          post_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          post_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          post_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'tag_post_id_fkey';
            columns: ['post_id'];
            referencedRelation: 'post';
            referencedColumns: ['id'];
          },
        ];
      };
      tasks: {
        Row: {
          calculation: number;
          category_id: number | null;
          completed: boolean;
          created_at: string;
          date_completed: string | null;
          description: string | null;
          difficulty: number;
          due_date: string;
          id: number;
          priority: string;
          priority_score: number;
          project_id: string | null;
          send_email: boolean | null;
          status: string;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          calculation: number;
          category_id?: number | null;
          completed?: boolean;
          created_at?: string;
          date_completed?: string | null;
          description?: string | null;
          difficulty?: number;
          due_date: string;
          id?: number;
          priority: string;
          priority_score?: number;
          project_id?: string | null;
          send_email?: boolean | null;
          status: string;
          title: string;
          updated_at?: string;
          user_id?: string;
        };
        Update: {
          calculation?: number;
          category_id?: number | null;
          completed?: boolean;
          created_at?: string;
          date_completed?: string | null;
          description?: string | null;
          difficulty?: number;
          due_date?: string;
          id?: number;
          priority?: string;
          priority_score?: number;
          project_id?: string | null;
          send_email?: boolean | null;
          status?: string;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'tasks_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'tasks_project_id_fkey';
            columns: ['project_id'];
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'tasks_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      team: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      transaction: {
        Row: {
          amount: string;
          created_at: string;
          date: string;
          description: string;
          id: string;
          name: string;
          type: string;
          updated_at: string;
        };
        Insert: {
          amount: string;
          created_at?: string;
          date: string;
          description: string;
          id?: string;
          name: string;
          type: string;
          updated_at?: string;
        };
        Update: {
          amount?: string;
          created_at?: string;
          date?: string;
          description?: string;
          id?: string;
          name?: string;
          type?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      weather: {
        Row: {
          created_at: string;
          detailedForecast: string | null;
          endTime: string | null;
          icon: string | null;
          id: string;
          isDaytime: boolean | null;
          lat: number | null;
          lon: number | null;
          name: string | null;
          number: number | null;
          postal_code: string | null;
          probabilityOfPrecipitation: Json | null;
          shortForecast: string | null;
          startTime: string | null;
          temperature: number | null;
          temperatureTrend: string | null;
          temperatureUnit: string | null;
          updated_at: string;
          windDirection: string | null;
          windSpeed: string | null;
        };
        Insert: {
          created_at?: string;
          detailedForecast?: string | null;
          endTime?: string | null;
          icon?: string | null;
          id?: string;
          isDaytime?: boolean | null;
          lat?: number | null;
          lon?: number | null;
          name?: string | null;
          number?: number | null;
          postal_code?: string | null;
          probabilityOfPrecipitation?: Json | null;
          shortForecast?: string | null;
          startTime?: string | null;
          temperature?: number | null;
          temperatureTrend?: string | null;
          temperatureUnit?: string | null;
          updated_at?: string;
          windDirection?: string | null;
          windSpeed?: string | null;
        };
        Update: {
          created_at?: string;
          detailedForecast?: string | null;
          endTime?: string | null;
          icon?: string | null;
          id?: string;
          isDaytime?: boolean | null;
          lat?: number | null;
          lon?: number | null;
          name?: string | null;
          number?: number | null;
          postal_code?: string | null;
          probabilityOfPrecipitation?: Json | null;
          shortForecast?: string | null;
          startTime?: string | null;
          temperature?: number | null;
          temperatureTrend?: string | null;
          temperatureUnit?: string | null;
          updated_at?: string;
          windDirection?: string | null;
          windSpeed?: string | null;
        };
        Relationships: [];
      };
      weekly_goals: {
        Row: {
          created_at: string;
          goal_id: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          goal_id: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          goal_id?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'weekly_goals_goal_id_fkey';
            columns: ['goal_id'];
            referencedRelation: 'goal';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string;
        };
        Returns: Record<string, unknown>;
      };
      delete_storage_object: {
        Args: {
          bucket: string;
          object: string;
        };
        Returns: Record<string, unknown>;
      };
      get_page_parents: {
        Args: {
          page_id: number;
        };
        Returns: {
          id: number;
          parent_page_id: number;
          path: string;
          meta: Json;
        }[];
      };
      match_documents: {
        Args: {
          query_embedding: string;
          match_count?: number;
          filter?: Json;
        };
        Returns: {
          id: number;
          content: string;
          metadata: Json;
          similarity: number;
        }[];
      };
      match_page_sections: {
        Args: {
          embedding: string;
          match_threshold: number;
          match_count: number;
          min_content_length: number;
        };
        Returns: {
          id: number;
          page_id: number;
          slug: string;
          heading: string;
          content: string;
          similarity: number;
        }[];
      };
    };
    Enums: {
      app_permission: 'channels.delete' | 'messages.delete';
      app_role: 'admin' | 'moderator';
      user_status: 'ONLINE' | 'OFFLINE';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
